<template>
	<div class="main">
		<div class="redirecting" v-if="shortened">
			<img alt="Loading logo" title="Loading" src="~/assets/logo.png">
			<span v-if="shortened.type != 0">Redirecting you in {{ timeout }} second{{ (timeout > 1 ? 's' : '') + dots }}</span>
			<div v-if="shortened.type == 1" class="badge">
				<img src="~/assets/icons/badges/verified.svg" alt="Verified icon" title="Verified"/>
				Verified
			</div>
			<div v-else-if="shortened.type == 2" class="badge">
				<img src="~/assets/icons/badges/official.svg" alt="Verified icon" title="Official"/>
				Official
			</div>
			<div v-else-if="shortened.type == 3" class="badge">
				<img src="~/assets/icons/badges/educational.svg" alt="School icon" title="Educational"/>
				Educational
			</div>
			<div v-else-if="shortened.type == 0" class="not-sure">
				<span>☢️ This link is not verified.<br>Are you sure you want to continue ?</span>
				<div class="badge" @click="if(shortened){shortened.type = -1;}">
					<img src="~/assets/icons/badges/arrow.svg" alt="Are you sure ?" title="Are you sure ?"/>
					Yes I am
				</div>
			</div>
			<div class="uuid">{{ shortened.uuid }}</div>
		</div>
		<div class="invalid" v-else>
			<span>Unknown or invalid link 😖</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		background: linear-gradient(45deg, var(--black-clr), var(--gray-clr));
	}

	.redirecting {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 250px;
		width: 50vw;

		> img {
			height: 150px;
			width: 150px;
			animation: heartbeat 1s infinite;
		}

		span {
			font-size: 20px;
			margin: 16px 0 12px;
		}

		> .not-sure {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;

			> span {
				margin: 16px 0 24px;
			}
		}
	}

	.invalid {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 250px;
		width: 50vw;

		> span {
			font-size: 20px;
		}
	}

	.uuid {
		color: var(--light-gray-clr);
		font-size: 12px;
		position: absolute;
		bottom: 24px;
		left: 50%;
		width: 260px;
		margin-left: -130px;
		text-align: center;
	}

	@keyframes heartbeat {
		0% {
			transform: scale(0.8);
		}
		15% {
			transform: scale(0.9);
		}
		25% {
			transform: scale(0.8);
		}
		40% {
			transform: scale(1);
		}
		70% {
			transform: scale(0.8);
		}
		100% {
			transform: scale(0.8);
		}
	}
</style>

<script setup lang="ts">
	import { Ref } from 'vue';

	interface IRequest {
		data: IShortened;
	}

	interface IShortened {
		uuid: string;
		code: string;
		original: string;
		timeout: number;
		usages: number;
		type: number;
	}

	const nuxtApp = useNuxtApp();

	const { code } = useRoute().params;
	let url: string = "https://dynamored.com/odin/bragi/"
	if(code && code.toString().match(/^[a-zA-Z0-9]{3,8}$/)) url += code;

	const { data } = await useFetch<IRequest>(url);

	const shortened: IShortened | undefined = data.value?.data;
	let timeout: Ref<number> = ref(3);
	let dots: Ref<string> = ref("...");

	useHead({
		title: shortened ? 'Redirecting...' : 'Invalid link' + ' | Bragi'
	})

	if(shortened){
		let state: boolean = false;
		let continueInterval: boolean = true;

		timeout.value = shortened.timeout;

		setInterval(() => {
			if(shortened.type == 0) return;

			if(dots.value.length >= 3) dots.value = '.';
			else dots.value += '.';

			if(!continueInterval) return;

			if(timeout.value <= 1){
				continueInterval = false;
				try {
					return navigateTo(shortened.original, { external: true, redirectCode: 301 });
				} catch (error) {
					console.error("No nuxt instance")
				}
			}

			if(state) timeout.value--;
			state = !state;
		}, 500)
	}
</script>