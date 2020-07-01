import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Home
            </Link>
            <Link color="inherit" href="/about/" onClick={handleClick}>
                About
            </Link>
            <Link color="inherit" href="/coaching/" onClick={handleClick}>
                Coaching
            </Link>
            <Link color="inherit" href="/contact/" onClick={handleClick}>
                Contact
            </Link>
        </Breadcrumbs>
    );
}