import type { LayoutServerLoad } from './$types';
import { clerkClient } from '@clerk/clerk-sdk-node';

export const load = (async ({ params }) => {
	const response = await clerkClient.organizations.getOrganization({
		slug: params.slug
	});
	return {
		org_id: response.id ?? null,
		stage_name: response.name ?? null,
		image_url: response.imageUrl ?? null,
		slug: response.slug ?? null,
		email: 'hello@epsilonrecords.com' ?? null
	};
}) satisfies LayoutServerLoad;
