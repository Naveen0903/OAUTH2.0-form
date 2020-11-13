const formElements = {
    name: {text: "Name", type: "text", name: "name", placeholder: "Ex: john"},
    email: {text: "Email address", type: "email", name:"email", placeholder: "abc@mail.com"},
    password: {text: "Password", type: "password", name: "password"}
}

export const signup = [
    formElements.name,
    formElements.email,
    formElements.password
]

export const login = [
    formElements.email,
    formElements.password
]