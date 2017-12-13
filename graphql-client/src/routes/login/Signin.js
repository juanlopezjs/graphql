import React from 'react';
import {Divider, Form, Button, Icon, Image} from 'semantic-ui-react'

const args = {}
const handleChange = (ev, input)=>{
  args[input.name] = input.value
}
export default ({styles, handleClick, handleSubmit}) =>(
  <div>
    <div style={styles.box}>
      <Image src="images/logo.png" fluid/>
      <Form onSubmit={(ev)=>handleSubmit(ev, args)}>
        <Form.Field>
          <Form.Input name="email" onChange={handleChange} placeholder="email o nombre de usuario" icon={<Icon name="check circle outline" size="large"/>}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="password" type="password"  onChange={handleChange}  placeholder="Password" icon={<Icon name="remove circle outline" color="red" size="large"/>}/>
        </Form.Field>
        <Button type="submit" primary fluid>Iniciar sesíon</Button>
        <Divider horizontal>O</Divider>
        <Button color="facebook">
          <Icon name="facebook"/>Inicar sesión con facebook
        </Button>
      </Form>
    </div>
    <div style={styles.box}>
      ¿No tienes una cuenta? <a href="" onClick={handleClick}>Regístrate</a>
    </div>
  </div>
)
