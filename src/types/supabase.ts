export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[]

export interface Database {
	public: {
		Tables: {
			posts: {
				Row: {
					content: string
					created_at: string
					id: string
					user_id: string
				}
				Insert: {
					content: string
					created_at?: string
					id?: string
					user_id: string
				}
				Update: {
					content?: string
					created_at?: string
					id?: string
					user_id?: string
				}
				Relationships: [
					{
						foreignKeyName: 'posts_user_id_fkey'
						columns: ['user_id']
						referencedRelation: 'users'
						referencedColumns: ['id']
					}
				]
			}
			products: {
				Row: {
					collection: string
					created_at: string
					description: string
					dislikes: number
					id: string
					image_url_1: string
					image_url_2: string
					likes: number
					name: string
					price: number
					slug: string
				}
				Insert: {
					collection: string
					created_at?: string
					description: string
					dislikes?: number
					id?: string
					image_url_1: string
					image_url_2: string
					likes?: number
					name: string
					price?: number
					slug: string
				}
				Update: {
					collection?: string
					created_at?: string
					description?: string
					dislikes?: number
					id?: string
					image_url_1?: string
					image_url_2?: string
					likes?: number
					name?: string
					price?: number
					slug?: string
				}
				Relationships: []
			}
			users: {
				Row: {
					avatar_url: string | null
					city: string | null
					country: string | null
					created_at: string
					email: string | null
					full_name: string
					id: string
					is_admin: boolean | null
				}
				Insert: {
					avatar_url?: string | null
					city?: string | null
					country?: string | null
					created_at?: string
					email?: string | null
					full_name: string
					id: string
					is_admin?: boolean | null
				}
				Update: {
					avatar_url?: string | null
					city?: string | null
					country?: string | null
					created_at?: string
					email?: string | null
					full_name?: string
					id?: string
					is_admin?: boolean | null
				}
				Relationships: [
					{
						foreignKeyName: 'users_id_fkey'
						columns: ['id']
						referencedRelation: 'users'
						referencedColumns: ['id']
					}
				]
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}
