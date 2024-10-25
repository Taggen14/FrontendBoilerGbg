'use client';  // Detta kan vara nödvändigt om du har interaktiva element

import CampaignsPageComponent from "@/components/campaigns-page";

export function CampaignPage() {
    return (
        <main className="justify-center items-center">
            <CampaignsPageComponent />
        </main>
    );
}
