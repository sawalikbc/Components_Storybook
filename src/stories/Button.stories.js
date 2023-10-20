import Button from "../component/Button"

function handleClick() {
    console.log("Button clicked");
  }

export default {
    title: "Button",
    component: Button,
    argTypes: {handleClick: {action: handleClick}},
}


const Template = args => <Button {...args} />
export const Cyan = Template.bind({})
Cyan.args = {
    backgroundColor: "Cyan",
    label: "Press Me",
    size: "md",
}

export const Green = Template.bind({})
Green.args = {
    backgroundColor: "Green",
    label: "Press Me",
    size: "sm",
}

