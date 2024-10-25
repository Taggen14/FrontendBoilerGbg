"'use client'";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Calendar, Mail } from "lucide-react";
import axios from "axios";
import { todaysDate } from "@/utils/todaysDate";

export interface Campaign {
  companyName: string;
  companyDescription: string;
  productDescription: string;
  targetAudience: string;
  id: string;
  userId: string;
  createdAt: string;
  // emails: [string] // detta ska va med men fattar inte ens grejen med emails
}

export function CampaignsPageComponent() {
  // Function to navigate to specific campaign
  let navigate = useNavigate();
  function changeRoute(id: string): void {
    // navigate(`/campaign?id=${id}`);
    navigate(`/campaign/${id}`);
  }
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    companyName: " ",
    companyDescription: " ",
    productDescription: " ",
    targetAudience: " ",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1337/campaign", {
        ...formData,
        createdAtDate: todaysDate,
        userId: "32459cc8-a06a-47a4-8133-af0ec0cfa609", // test hårdkodad userId ska fixas med autenticering
        emails: [], // oklart hur emails ens ska fungera?
      });
      console.log("Kampanj skapad:", response.data);
      setShowForm(false);
    } catch (error) {
      console.error("Fel vid skapande av kampanj:", error);
    }
  };

  // hämtar alla campaigns från databasen
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("http://localhost:1337/campaign");
        setCampaigns(response.data);
        console.log(campaigns, "campaigns");
      } catch (error) {
        console.error("Fel vid hämtning av kampanjer:", error);
      }
    };
    fetchCampaigns();
  }, [showForm]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <Button onClick={() => setShowForm(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Campaign
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} onClick={() => changeRoute(campaign.id)}>
            <CardHeader>
              <CardTitle>{campaign.companyName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-500 mb-2 dark:text-zinc-400">
                {campaign.companyDescription}
              </p>
              <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                <Calendar className="mr-2 h-4 w-4" />
                <span>
                  Skapad{" "}
                  {new Date(campaign.createdAt).toLocaleDateString("sv-SE")}
                </span>
              </div>
              <div className="flex items-center text-sm text-zinc-500 mt-1 dark:text-zinc-400">
                <Mail className="mr-2 h-4 w-4" />
                {/*  <span>{campaign.emails.length} generated emails</span> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {showForm && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Create your campaign</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-zinc-500 mb-1 dark:text-zinc-400"
                >
                  Company name
                </label>
                <Input
                  id="companyName"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="companyDescription"
                  className="block text-sm font-medium text-zinc-500 mb-1 dark:text-zinc-400"
                >
                  Company description
                </label>
                <Textarea
                  id="companyDescription"
                  placeholder="Describe your company"
                  value={formData.companyDescription}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="productDescription"
                  className="block text-sm font-medium text-zinc-500 mb-1 dark:text-zinc-400"
                >
                  Product description
                </label>
                <Textarea
                  id="productDescription"
                  placeholder="Describe your product or service"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="targetAudience"
                  className="block text-sm font-medium text-zinc-500 mb-1 dark:text-zinc-400"
                >
                  Target audience
                </label>
                <Input
                  id="targetAudience"
                  placeholder="Who are you targeting?"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit">Create Campaign</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default CampaignsPageComponent;
