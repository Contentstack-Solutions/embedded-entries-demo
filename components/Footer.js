/* eslint-disable @next/next/no-img-element */

import { Form } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import React, { Component } from 'react'
import Select from 'react-select'

export default function Footer() {
  // '🇬🇧 English'
const options = [
  { value: 'chocolate', label: <div><img className="flag-select" src="uk.png" height="14px" width="20px"/>English</div> },
  { value: 'strawberry', label: <div><img className="flag-select" src="france.png" height="14px" width="20px"/>French</div> },
  { value: 'vanilla', label: <div><img className="flag-select" src="germany.png" height="14px" width="20px"/>German</div> }
]
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src="/logo.png" alt="" height="19" />
        <small className="d-block mb-3 text-muted">© 2017–2021</small>
        <Select isSearchable={false} defaultValue={options[0]} options={options} />
        {/* <Form className="d-flex">
          <Form.Select className="language-select" size="sm">
            <option>English</option>
            <option>French</option>
            <option>German</option>
          </Form.Select>
        </Form> */}
      </div>
      <div className="col-6 col-md">
        <h5>Recipes</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Products</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
  );
}
