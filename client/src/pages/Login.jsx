import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", form);
            localStorage.setItem("token", res.data.token);
            alert("Login successful!");
        } catch (err) {
            alert(err.response.data.message || "Error");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full" />
                <button className="bg-green-500 text-white px-4 py-2">Login</button>
            </form>
        </div>
    );
}
