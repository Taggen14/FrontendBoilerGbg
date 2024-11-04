/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/M4EOx9f4Kqq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
// mina importer
import { Campaign } from "./campaigns-page";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function SpecificCampaign() {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaignDetails = async () => {
      try {
        const response = await axios.get(
          `https://backend-boiler-gbg.vercel.app/?vercelToolbarCode=f1t9PJvXJCYC0pM/campaign/${id}`
        );
        setCampaign(response.data);
      } catch (error) {
        console.error("Fel vid hämtning av kampanjdetaljer:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaignDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!campaign) {
    return <div className="text-center mt-10">Kampanj hittades inte</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <header className="bg-black text-white p-4 rounded-md">
        <h1 className="text-2xl font-bold">{campaign.companyName}</h1>
        <p className="mt-2">
          <strong>Company: </strong>
          {campaign.companyDescription}
        </p>
        <p>
          <strong>Product: </strong>
          {campaign.productDescription}
        </p>
        <p>
          <strong>Target Audience: </strong>
          {campaign.targetAudience}
        </p>
      </header>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Generated Emails</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Exciting New Product Launch!</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Dear valued customer, we're thrilled to announce...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Limited Time Offer Inside</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Don't miss out on our exclusive deal...</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Create New Email</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter email subject" />
          </div>
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" placeholder="Enter email content" />
          </div>
          <Button className="mt-4">Add Email</Button>
        </div>
      </section>
    </div>
  );
}
