using Microsoft.EntityFrameworkCore;
using Backend.Models;

var builder = WebApplication.CreateBuilder(args);

// Cors
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

// Configurar conexão MariaDB
var connectionString = "server=localhost;database=organo_db;user=root;password=0802";
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

var app = builder.Build();
app.UseCors();

// --- CRUD ---

// Listar todos
app.MapGet("/collaborators", async (AppDbContext db) =>
    await db.Collaborators.ToListAsync());

// Obter por id
app.MapGet("/collaborators/{id}", async (AppDbContext db, int id) =>
    await db.Collaborators.FindAsync(id) is Collaborator collab ? Results.Ok(collab) : Results.NotFound());

// Criar
app.MapPost("/collaborators", async (AppDbContext db, Collaborator collab) => {
    db.Collaborators.Add(collab);
    await db.SaveChangesAsync();
    return Results.Created($"/collaborators/{collab.Id}", collab);
});

// Atualizar
app.MapPut("/collaborators/{id}", async (AppDbContext db, int id, Collaborator input) => {
    var collab = await db.Collaborators.FindAsync(id);
    if (collab is null) return Results.NotFound();

    collab.Name = input.Name;
    collab.Role = input.Role;
    collab.Image = input.Image;
    collab.Team = input.Team;

    await db.SaveChangesAsync();
    return Results.Ok(collab);
});

// Deletar
app.MapDelete("/collaborators/{id}", async (AppDbContext db, int id) => {
    var collab = await db.Collaborators.FindAsync(id);
    if (collab is null) return Results.NotFound();

    db.Collaborators.Remove(collab);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.Run();
