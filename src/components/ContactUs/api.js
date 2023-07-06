export const sendContactForm = async (data) => fetch('https://electroshop-api.onrender.com/api/v1/contact', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
}).then((res)=>{
    if (!res.ok) throw new Error(res);
    return res.json();
})