import App from "./App";
import {Form,Button,Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,createRef} from "react";



export default function EditManufacturers() {
return()



  <div>
 <Form onSubmit={add} ref={formData}>
<Form.Group controlId="formBasicProductName">
  <Form.Label>Edit Manufacturer</Form.Label>
  <Form.Control type="text" placeholder="Enter product name" name="product__name" />
  <Form.Text className="text-muted">
  Use this form to edit existing manufacturers
  </Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPrice">
  <Form.Label>Manufacturer name</Form.Label>
  <Form.Control type="text" placeholder="Add name" name="name"/>
</Form.Group>

<Form.Group controlId="formBasicQuantity">
  <Form.Label>Head Quarters</Form.Label>
  <Form.Control type="locationpicker" placeholder="Location" name="location" />
</Form.Group>
<Form.Group controlId="formBasicQuantity">
  <Form.Label>Quantity</Form.Label>
  <Form.Control type="interger" placeholder="How many:qty" name="qty" />
</Form.Group>

<Form.Group controlId="formBasicQuantity">
  <Form.Label>Contact</Form.Label>
  <Form.Control type="text" placeholder="Add name" name="qty" />
</Form.Group>

<Button variant="primary" type="submit">
  Add to inventory
</Button>
</Form>