import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const DonationStore = writable([
    browser && (localStorage.getItem("donateStats") || "noStats")
]
)

DonationStore.subscribe((val) => browser && localStorage.setItem("donateStats", val))