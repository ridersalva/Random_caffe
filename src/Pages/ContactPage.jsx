import React from 'react'
import { Button,Form } from 'bootstrap'

export default function ContactPage() {
  return (
   <Form>

     <Form.Group className="md-3" >
      <Form.Label>¿Cómo le gusta el café?</Form.Label>
      <Form.Control placehilder="Con leche claro"/>
    </Form.Group>

    <Form.Group className="md-3" >
      <Form.Label> e-mail </Form.Label>
      <Form.Control placehilder="your e-mail"/>
    </Form.Group>

    <div className="d-grid gap-2">
      <Button variant="warning" type="submit"> </Button>
    </div>

   </Form>
  )
}
