"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  requestType: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  requestType: "option1",
  message: "",
};

export default function Request2Page() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus({
        type: "success",
        message:
          "Таны хүсэлтийг хүлээн авлаа. Бид тантай удахгүй холбогдох болно.",
      });
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Уучлаарай, алдаа гарлаа. Дахин оролдоно уу.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-[#07332F] mb-6">Хүсэлт 2</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Нэр
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f69d78] focus:border-transparent"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  И-мэйл
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f69d78] focus:border-transparent"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Утасны дугаар
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f69d78] focus:border-transparent"
                  pattern="[0-9]{8}"
                  placeholder="88888888"
                />
              </div>

              {/* Organization Input */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Байгууллага
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f69d78] focus:border-transparent"
                />
              </div>
            </div>

            {/* Request Type Select */}
            <div>
              <label
                htmlFor="requestType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Хүсэлтийн төрөл
              </label>
              <select
                id="requestType"
                name="requestType"
                value={formData.requestType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f69d78] focus:border-transparent"
              >
                <option value="option1">Сонголт 1</option>
                <option value="option2">Сонголт 2</option>
                <option value="option3">Сонголт 3</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Нэмэлт мэдээлэл
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f69d78] focus:border-transparent"
              />
            </div>

            {/* Status Message */}
            {submitStatus.message && (
              <div
                className={`p-4 rounded-md ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 bg-[#07332F] text-white rounded-md hover:bg-[#0a4640] focus:outline-none focus:ring-2 focus:ring-[#f69d78] focus:ring-offset-2 transition-colors ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Илгээж байна..." : "Илгээх"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
