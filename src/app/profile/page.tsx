import { API_URL } from '@/constants'
import { EnumTokens } from '@/services/auth/auth.service'
import { IUser } from '@/types/types'
import { cookies } from 'next/headers'

// Для любителей пописать сервер на Next.js
const fetchProfile = async () => {
	'use server'

	const cookie = await cookies()
	const accessToken = cookie.get(EnumTokens.ACCESS_TOKEN)?.value

	return fetch(`${API_URL}/auth/profile`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	}).then(res => res.json()) as Promise<IUser>
}

export default async function ProfilePage() {
	const profile = await fetchProfile()

	console.log(profile)

	return (
		<div>
			{profile ? (
				<>
					<h1>Profile</h1>
					<p>{profile.email}</p>
				</>
			) : (
				<p>Not found!</p>
			)}
		</div>
	)
}
