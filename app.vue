<template>
	<div>
		<NuxtLayout>
			<NuxtPage/>
		</NuxtLayout>
	</div>
</template>

<style lang="scss">
	:root {
		--primary-clr: #A4161A;
		--secondary-clr: #660708;
		--tertiary-clr: #E5383B;

		--background-clr: #0B090A;
		--light-gray-clr: #D3D3D3;
		--gray-clr: #161A1D;
		--black-clr: #0B090A;
		--white-clr: #F5F3F4;

		--default-ft: 'Jetbrains Mono';
	}

	* {
		padding: 0;
		margin: 0;
		outline: 0;
		font-family: var(--default-ft);
		color: var(--white-clr);
		user-select: none;
	}

	img {
		-webkit-user-drag: none;
	}

	.badge {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 24px;
		height: 24px;
		border: white solid 1.5px;
		font-size: 14px;
		padding: 4px 16px;
		margin: 8px 0;
		width: fit-content;
		cursor: pointer;
		user-select: none;

		> img {
			height: 18px;
			width: 18px;
			margin-right: 8px;
		}
	}
</style>