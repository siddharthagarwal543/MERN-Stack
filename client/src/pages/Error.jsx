import React from 'react'

 function Error() {
  return (
    <>
    <section id='error-page'>
        <div className="content">
            <h2 className="header">404</h2>
            <h4>Sorry! Page not found</h4>
            <p>Oops! It seems like the page you're trying to access didn't exist. If you believe there's an issue , feel free to report it, and we will look into it</p>
            <div className="btns">
                <Navlink to='/'>return home</Navlink>
                <Navlink to='/contact'>report problem</Navlink>
            </div>
        </div>
    </section>
    </>
  )
}

export default Error
