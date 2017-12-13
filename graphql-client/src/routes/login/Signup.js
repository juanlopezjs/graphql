import React from 'react';
import {Divider, Button, Form, Icon, Image} from 'semantic-ui-react'
export default ({styles, handleClick}) =>(
  <div>
    <div style={styles.box}>
    <Image src="images/logo.png" fluid/>
    <h4>Regístrate para ver fotos y videos de tus amigos.</h4>
    <Form>
      <Button color="facebook">
        <Icon name="facebook"/>Inicar sesión con facebook
      </Button>
      <Divider horizontal>O</Divider>
      <Form.Field>
      <Form.Input type="password" placeholder="email" icon={<Icon name="remove circle outline" color="red" size="large"/>}/>
      </Form.Field>
      <Form.Field>
      <Form.Input type="password" placeholder="Nombre completo" icon={<Icon name="remove circle outline" color="red" size="large"/>}/>
      </Form.Field>
      <Form.Field>
      <Form.Input type="password" placeholder="nombre de usuario" icon={<Icon name="remove circle outline" color="red" size="large"/>}/>
      </Form.Field>
      <Form.Field>
        <Form.Input type="password" placeholder="Password" icon={<Icon name="remove circle outline" color="red" size="large"/>}/>
      </Form.Field>
      <Button type="submit" primary fluid>Submit</Button>
    </Form>
    </div>
    <div style={styles.box}>
    ¿Tienes una cuenta? <a href="" onClick={handleClick}>Inicia sesión</a>
    </div>
  </div>
)
