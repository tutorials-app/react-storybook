import React from 'react'
import Tile from './index'

export default {
  component: Tile,
  title: 'Tile'
}

const Template = args => <Tile {...args}/>

const overview = {
  title: 1839,
  subtitle: 'Hello world!'
}

export const Default = () => <Tile {...overview} />

export const Express = Template.bind({});
Express.args = {
  title: 838,
  subtitle: 'Expresso'
}
