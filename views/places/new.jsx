//importing react and def
const React = require('react')
const Def = require('../default')

//function to define new form

function new_form(){
    return (
        <Def>
            <main>
                <h1>Add a new place</h1>
            </main>
        </Def>
    )
}

module.exports = new_form