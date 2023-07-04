export const sendContactForm = async (data) => fetch('http://localhost:8080/api/v1/contact', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
}).then((res)=>{
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
})