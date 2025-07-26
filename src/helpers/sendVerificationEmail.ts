import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/apiResponse";
import verificationEmailTemplate from "../../emails/verificationEmailTemplate";

export async function verificationEmail(email: string, username:string, verifyCode: string): Promise<ApiResponse>{
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['tariq.chang73@gmail.com'],
            subject: 'Anonymous message | Verify Email',
            react: verificationEmailTemplate({username, otp:verifyCode})
        })
        return {success: true, message: "Verification email sent successfully"}
    } catch (emailError) {
        console.log("Error sending verification email", emailError);
        return {success: false, message: "Failed to send verification email"}
    }
}