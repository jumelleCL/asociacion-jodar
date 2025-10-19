"use client"

import Input from "@/components/ui/Input"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/context/userContext"

const Login = () => {
  const router = useRouter()
  const { setUserId } = useUser() 

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error)
      return
    }

    setUserId(data.user.id) 
    console.log(data);
    
    router.push("/admin/dashboard")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-10 w-1/2">
        <h1 className="text-3xl font-bold mb-10">Admin Login</h1>
        <form className="flex flex-col w-2/3 gap-5" onSubmit={handleSubmit}>
          <Input text="text" name="username" id="username" placeholder="Username" className="text-black" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input text="password" name="password" id="password" placeholder="Password" className="text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className="text-red-500">{error}</p>}
          <button className="bg-amber-500 hover:bg-amber-600 transition-colors duration-100 ease-in-out rounded-3xl" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
