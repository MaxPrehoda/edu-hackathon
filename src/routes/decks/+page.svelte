<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="h-screen">
	<div class="flex flex-row justify-center items-center h-full">
		<div class="px-4 sm:px-6 lg:px-8 py-4 border-[1px] rounded-lg">
			<div class="sm:flex sm:items-center">
				<div class="sm:flex-auto">
					<h1 class="text-base font-semibold leading-6 text-gray-900">Decks</h1>
					<p class="mt-2 text-sm text-gray-700">
						A list of all the decks in your account including their name and stats.
					</p>
				</div>
				<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						type="button"
						class="block rounded-md bg-rose-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
						>Add Deck</button
					>
				</div>
			</div>
			<div class="mt-8 flow-root">
				<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<table class="min-w-full divide-y divide-gray-300">
							<thead>
								<tr>
									<th
										scope="col"
										class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
										>Name</th
									>
									<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>New</th
									>
									<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>Learn</th
									>
									<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>Due</th
									>
									<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
										<span class="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200">
								<tr>
									<td
										class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
										>Hiragana 12</td
									>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-rose-500">20</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-red-500">5</td>
									<td
										class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
									>
										<a href="#" class="text-rose-600 hover:text-rose-900"
											>Edit<span class="sr-only">, Lindsay Walton</span></a
										>
									</td>
								</tr>

								<!-- More people... -->
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
