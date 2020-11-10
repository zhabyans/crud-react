import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const BackComponent = () => {
    return (
        <div className="mb-2">
            <Link to={"/"}>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                    </Button>
            </Link>
        </div>
    )
}

export default BackComponent
