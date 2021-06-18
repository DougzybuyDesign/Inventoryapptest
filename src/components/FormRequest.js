import App from "./App";
import {Form,Button,Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,createRef} from "react";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const initialState = {
name:"",
datetime:"",
nameError:"",
emailError:"",
datetimeError:"",
qtyError:"",
equipmentError:""
}

state = initialState;

validate = () => {
let emailError = "";
if (!this.state.email.includes("0")){
emailError = "invalid email";
this.setState({emailError});
return false;
}
return true;
;

let datetimeError = "";
if (!this.state.email.includes("0")){
  datetimeError = "Enter date/time";
  this.setState({datetimeError});
  return false;
  }
  return true;
  ;
let qtyError = "";
if (!this.state.qty.includes("0")){
  qtyError = "Add amount";
  this.setState({qtyError});
  return false;
  }
  return true;
  ;
let equipmentError = "";
if (!this.state.equipmentError.includes("0")){
  emailError = "invalid email";
  this.setState({equipmentError});
  return false;
  }
  return true;
  ;
  
};
{

}
export default function EquipmentRequest() {
return(
render()
state = {
name:"",
datetime:"",
nameError:"",
emailError:"",
datetimeError:"",
qtyError:"",
equipmentError:"",

}


  <div>
 <Form onSubmit={add} ref={formData}>
<Form.Group controlId="formBasicProductName">
  <Form.Label>Requestby</Form.Label>
  <Form.Control type="text" placeholder="Enter name" name="name" />
  <Form.Text className="text-muted">
    Use this form to request new laptops,printers etc.
  </Form.Text>
</Form.Group>
<div style={{color:"red"}}> {this.state.nameError}</div>
<Form.Group controlId="formBasicPrice">
  <Form.Label>Request date/time</Form.Label>
  <Form.Control type="datetime" placeholder="Date/Time" name="datetime"/>
</Form.Group>
<div style={{color:"red"}}> {this.state.datetimeError}</div>
<Form.Group controlId="formBasicQuantity">
  <Form.Label>Equipemnt</Form.Label>
  <Form.Control type="object" placeholder="How many:qty" name="qty" />
</Form.Group>
<div style={{color:"red"}}> {this.state.qtyError}</div>
<div>

<Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item> 
  </Carousel>
</div>

<Form.Group controlId="formBasicQuantity">
  <Form.Label>Quantity</Form.Label>
  <Form.Control type="interger" placeholder="How many:qty" name="qty" />
</Form.Group>

<Form.Group controlId="formBasicQuantity">
  <Form.Label>Approved</Form.Label>
  <Form.Control type="bool" placeholder="How many:qty" name="qty" />
</Form.Group>

<Button variant="primary" type="submit">
  Add to inventory
</Button>
</Form>

              {
                  product.map((item, index)=>{
                      return(
                          <tr key={index}>
                              <td>{index}</td>
                              <td>{item.product_name}</td>
                              <td>{item.price}</td>
                              <td>{item.qty}</td>
                              
</tr>
    )
  })
}
</tbody>
</Table>
  </div>
)
}