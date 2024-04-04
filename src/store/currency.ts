import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CurrencyState {
	currency: string
	setCurrency: (currency: string) => void
}

export const useCurrency = create<CurrencyState>()(
	persist(
		(set, get) => ({
			currency: 'USD',
			setCurrency: (currency) => set({ currency: currency })
		}),
		{ name: 'currencyStore' }
	)
)
