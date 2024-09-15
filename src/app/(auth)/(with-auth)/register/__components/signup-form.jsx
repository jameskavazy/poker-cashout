import { signup } from "@/app/(auth)/auth";


export function SignupForm(){
    return (
        <form action={signup}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" placeholder="Email"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password"/>
            </div>
            <button type="submit">Sign Up</button>

        </form>
    )
}