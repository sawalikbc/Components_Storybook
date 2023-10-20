import React from 'react';
import Navbar from '../component/Navbar';

// Import other dependencies as needed

export default {
  title: 'Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "Cyan",
  label: "Press Me",
  size: "md",
};
