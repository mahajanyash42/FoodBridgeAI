import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const WEBHOOK_URL = "https://team2.yashmahajan.com/webhook-test/foodbridge-intake";

type FormDataType = {
  donorName: string;
  foodType: string;
  quantity: string;
  pickupDeadline: string;
  address: string;
  contactEmail: string;
  notes: string;
};

const initialFormData: FormDataType = {
  donorName: "",
  foodType: "",
  quantity: "",
  pickupDeadline: "",
  address: "",
  contactEmail: "",
  notes: "",
};

const DonationForm = () => {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update =
    (field: keyof FormDataType) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const payload = {
        donor_name: formData.donorName,
        donor_email: formData.contactEmail,
        food_type: formData.foodType,
        quantity: formData.quantity,
        pickup_deadline: formData.pickupDeadline,
        address: formData.address,
        notes: formData.notes,
        source: "foodbridge-website",
        submitted_at: new Date().toISOString(),
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook request failed with status ${response.status}`);
      }

      toast.success(
        "Thank you! Your food donation has been submitted. We’ll match you with a shelter shortly."
      );

      setFormData(initialFormData);
    } catch (error) {
      console.error("Donation submission error:", error);
      toast.error("Something went wrong while submitting your donation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";

  return (
    <section id="donate" className="py-24 bg-secondary/50">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-3">
            Donate Surplus Food
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            List your food in seconds
          </h2>
          <p className="text-muted-foreground">
            Our AI handles the rest — matching, routing, and coordinating with nearby shelters.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-8 shadow-lg space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Restaurant / Donor Name
              </label>
              <input
                required
                value={formData.donorName}
                onChange={update("donorName")}
                placeholder="e.g. Mario's Pizzeria"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Contact Email
              </label>
              <input
                required
                type="email"
                value={formData.contactEmail}
                onChange={update("contactEmail")}
                placeholder="you@restaurant.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Food Type
              </label>
              <select
                required
                value={formData.foodType}
                onChange={update("foodType")}
                className={inputClass}
              >
                <option value="">Select type</option>
                <option value="prepared_meals">Prepared Meals</option>
                <option value="fresh_produce">Fresh Produce</option>
                <option value="baked_goods">Baked Goods</option>
                <option value="dairy">Dairy Products</option>
                <option value="mixed">Mixed Items</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Quantity
              </label>
              <input
                required
                value={formData.quantity}
                onChange={update("quantity")}
                placeholder="e.g. 24 meals or 15 lbs"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Pickup Deadline
              </label>
              <input
                required
                type="datetime-local"
                value={formData.pickupDeadline}
                onChange={update("pickupDeadline")}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Pickup Address
              </label>
              <input
                required
                value={formData.address}
                onChange={update("address")}
                placeholder="123 Main St, City"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Notes (optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={update("notes")}
              rows={3}
              placeholder="Any special handling instructions..."
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3.5 font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send size={18} />
                Submit Donation
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default DonationForm;