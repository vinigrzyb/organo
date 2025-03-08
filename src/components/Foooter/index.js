import './footer.css'

const footer = () => {
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://github.com/vinigrzyb' target='_blank'>
                            <img src='/images/github-color-svgrepo-com.svg' alt='Github'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/vinicius-grzyb-oliveira-78594b260' target='_blank'>
                            <img src='/images/linkedin-svgrepo-com.svg' alt='LinkedIn'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/images/logo.png' alt='Logo'/>
            </section>
            <section>
                <p>
                    Desenvolvido por Vinicius Grzyb
                </p>
            </section>
        </footer>
    )
}

export default footer