<script>
	export let form;
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<img
			class="mx-auto max-w-[225px]"
			src="https://cdn.shopify.com/s/files/1/0697/3469/5208/files/Frame_5350_86x.png?v=1696624591"
			alt="Exalt Academy"
		/>
		<h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			Register an account
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<div class="shadow bg-white px-6 py-12 sm:rounded-lg sm:px-12">
			<form class="space-y-6" action="?/register" method="POST">
				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
						>Email address</label
					>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900"
						>Password</label
					>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center px-2">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							class="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-600"
						/>
						<label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900"
							>Remember me</label
						>
					</div>

					<div class="text-sm leading-6">
						<a href="/forgotten-password" class="font-semibold text-rose-600 hover:text-rose-600"
							>Forgot password?</a
						>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
						>Register</button
					>
				</div>
			</form>

			<div>
				<div class="relative mt-10">
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="w-full border-t border-gray-200" />
					</div>
					<div class="relative flex justify-center text-sm font-medium leading-6">
						<span class="bg-white px-6 text-gray-900">Or continue with</span>
					</div>
				</div>

				<div class="mt-6 grid grid-cols-3 gap-4">
					<form action="?/oauth" method="post">
						<input type="hidden" name="provider" value="discord" />
						<button
							class="flex w-full items-center justify-center gap-3 rounded-md bg-[#5865F2] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
						>
							<svg fill="currentColor" viewBox="0 0 127.14 96.36">
								<path
									d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
								/>
							</svg>
							<span class="text-sm font-semibold leading-6">Discord</span>
						</button>
					</form>
					<form action="?/oauth" method="post">
						<input type="hidden" name="provider" value="github" />

						<button
							class="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm font-semibold leading-6">GitHub</span>
						</button>
					</form>
					<!-- 					<form action="?/oauth" method="post">
						<input type="hidden" name="provider" value="google" />
						<button
							class="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
						>
							<svg viewBox="0 0 46 46" class="h-6 w-6">
								<defs>
									<filter
										x="-50%"
										y="-50%"
										width="200%"
										height="200%"
										filterUnits="objectBoundingBox"
										id="filter-1"
									>
										<feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
										<feGaussianBlur
											stdDeviation="0.5"
											in="shadowOffsetOuter1"
											result="shadowBlurOuter1"
										/>
										<feColorMatrix
											values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0"
											in="shadowBlurOuter1"
											type="matrix"
											result="shadowMatrixOuter1"
										/>
										<feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2" />
										<feGaussianBlur
											stdDeviation="0.5"
											in="shadowOffsetOuter2"
											result="shadowBlurOuter2"
										/>
										<feColorMatrix
											values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0"
											in="shadowBlurOuter2"
											type="matrix"
											result="shadowMatrixOuter2"
										/>
										<feMerge>
											<feMergeNode in="shadowMatrixOuter1" />
											<feMergeNode in="shadowMatrixOuter2" />
											<feMergeNode in="SourceGraphic" />
										</feMerge>
									</filter>
									<rect id="path-2" x="0" y="0" width="40" height="40" rx="2" />
									<rect id="path-3" x="5" y="5" width="38" height="38" rx="1" />
								</defs>
								<g
									id="Google-Button"
									stroke="none"
									stroke-width="1"
									fill="none"
									fill-rule="evenodd"
									sketch:type="MSPage"
								>
									<g
										id="9-PATCH"
										sketch:type="MSArtboardGroup"
										transform="translate(-608.000000, -219.000000)"
									/>
									<g
										id="btn_google_dark_normal"
										sketch:type="MSArtboardGroup"
										transform="translate(-1.000000, -1.000000)"
									>
										<g
											id="button"
											sketch:type="MSLayerGroup"
											transform="translate(4.000000, 4.000000)"
											filter="url(#filter-1)"
										>
											<g id="button-bg">
												<use
													fill="#4285F4"
													fill-rule="evenodd"
													sketch:type="MSShapeGroup"
													xlink:href="#path-2"
												/>
												<use fill="none" xlink:href="#path-2" />
												<use fill="none" xlink:href="#path-2" />
												<use fill="none" xlink:href="#path-2" />
											</g>
										</g>
										<g id="button-bg-copy">
											<use
												fill="#FFFFFF"
												fill-rule="evenodd"
												sketch:type="MSShapeGroup"
												xlink:href="#path-3"
											/>
											<use fill="none" xlink:href="#path-3" />
											<use fill="none" xlink:href="#path-3" />
											<use fill="none" xlink:href="#path-3" />
										</g>
										<g
											id="logo_googleg_48dp"
											sketch:type="MSLayerGroup"
											transform="translate(15.000000, 15.000000)"
										>
											<path
												d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
												id="Shape"
												fill="#4285F4"
												sketch:type="MSShapeGroup"
											/>
											<path
												d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
												id="Shape"
												fill="#34A853"
												sketch:type="MSShapeGroup"
											/>
											<path
												d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
												id="Shape"
												fill="#FBBC05"
												sketch:type="MSShapeGroup"
											/>
											<path
												d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
												id="Shape"
												fill="#EA4335"
												sketch:type="MSShapeGroup"
											/>
											<path
												d="M0,0 L18,0 L18,18 L0,18 L0,0 Z"
												id="Shape"
												sketch:type="MSShapeGroup"
											/>
										</g>
										<g id="handles_square" sketch:type="MSLayerGroup" />
									</g>
								</g>
							</svg>
							<span class="-translate-x-2 text-sm font-semibold leading-6">Google</span>
						</button>
					</form> -->
					<form action="?/oauth" method="post">
						<input type="hidden" name="provider" value="apple" />
						<button
							class="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
						>
							<svg class="h-6 w-6" viewBox="10 14 26 26">
								<g
									id="White-Logo-Square-"
									stroke="none"
									stroke-width="1"
									fill="none"
									fill-rule="evenodd"
								>
									<path
										d="M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z"
										id=""
										fill="#FFFFFF"
										fill-rule="nonzero"
									/>
								</g>
							</svg>
							<span class="text-sm font-semibold leading-6">Apple</span>
						</button>
					</form>
				</div>
			</div>
		</div>

		<p class="mt-10 text-center text-sm text-gray-500">
			Not a member?
			<a href="/waitlist" class="font-semibold leading-6 text-rose-600 hover:text-rose-600"
				>Sign up!</a
			>
		</p>
	</div>
</div>
