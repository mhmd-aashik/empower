"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validator";
import { eventDefaultValues } from "@/constants";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

import CategoryMenu from "./CategoryMenu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUploadThing } from "@/lib/uploadthing";
import { FileUploader } from "./FileUploader";
import { createEvent } from "@/lib/actions/event.action";
import { type } from "os";

interface Props {
  userId: string;
  type: "Create" | "Update";
}

const EventForm = ({ type, userId }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const editorRef: any = useRef(null);

  const initialValues = eventDefaultValues;

  const router = useRouter();

  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let uploadedImageUrl = values.imageUrl;
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      if (!uploadedImages) {
        return;
      }
      uploadedImageUrl = uploadedImages[0].url;
    }
    if (type === "Create") {
      try {
        const newEvent = await createEvent({
          event: {
            ...values,
            description: editorRef.current?.getContent(),
            imageUrl: uploadedImageUrl,
          },
          userId,
          path: "/profile",
        });
        if (newEvent) {
          form.reset();
          router.push(`/events/${newEvent._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Event title"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <CategoryMenu
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row h-2422">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="">
                  <Editor
                    apiKey="rc80d7x7p7t7u8o9nbb0343rz3vct7b95tky3ym48feida5s"
                    onInit={(_evt, editor) => {
                      editorRef.current = editor;
                    }}
                    onBlur={field.onBlur}
                    onEditorChange={(content) => field.onChange(content)}
                    initialValue=""
                    init={{
                      height: 280,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <Image
                      src="/assets/icons/location-grey.svg"
                      alt="calender"
                      width={24}
                      height={24}
                    />
                    <Input
                      placeholder="Event Location or Online"
                      {...field}
                      className="input-field"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="orgindu"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="select-field">
                      <SelectValue placeholder="Organization / Individual" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Organization">
                          Organization
                        </SelectItem>
                        <SelectItem value="Individual">Individual</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calender"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-gray-600">
                      Start Date :
                    </p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="dd/MM/yyyy hh:mm aa"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calender"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-gray-600">
                      End Date :
                    </p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="dd/MM/yyyy hh:mm aa"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ///////////////////// */}

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="select-field">
                      <SelectValue placeholder="Age Limit " />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="10 Years - 15 Years">
                          10 Years - 15 Years
                        </SelectItem>
                        <SelectItem value="16 Years - 18 Years">
                          16 Years - 18 Years
                        </SelectItem>
                        <SelectItem value="24 Years above">
                          24 Years above
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="select-field">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Sinhala">Sinhala</SelectItem>
                        <SelectItem value="Tamil">Tamil</SelectItem>
                        <SelectItem value="other Language ">
                          other Language
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="select-field">
                      <SelectValue placeholder="Skills" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Teamwork">Teamwork</SelectItem>
                        <SelectItem value="Problem-Solving">
                          Problem-Solving
                        </SelectItem>
                        <SelectItem value="Communication Skills">
                          Communication Skills
                        </SelectItem>
                        <SelectItem value="Flexibility">Flexibility</SelectItem>
                        <SelectItem value="Time Management">
                          Time Management
                        </SelectItem>
                        <SelectItem value="Customer Service">
                          Customer Service
                        </SelectItem>
                        <SelectItem value="Attention to Detail">
                          Attention to Detail
                        </SelectItem>
                        <SelectItem value="Physical Stamina">
                          Physical Stamina
                        </SelectItem>
                        <SelectItem value="Leadership Skills">
                          Leadership Skills
                        </SelectItem>
                        <SelectItem value="Cultural Sensitivity">
                          Cultural Sensitivity
                        </SelectItem>
                        <SelectItem value="Event Planning">
                          Event Planning
                        </SelectItem>
                        <SelectItem value="Organizational Skills">
                          Organizational Skills
                        </SelectItem>
                        <SelectItem value="Adaptability">
                          Adaptability
                        </SelectItem>
                        <SelectItem value="Empathy">Empathy</SelectItem>
                        <SelectItem value="Negotiation Skills">
                          Negotiation Skills
                        </SelectItem>
                        <SelectItem value="Conflict Resolution">
                          Conflict Resolution
                        </SelectItem>
                        <SelectItem value="Decision Making">
                          Decision Making
                        </SelectItem>
                        <SelectItem value="Creativity">Creativity</SelectItem>
                        <SelectItem value="Resourcefulness">
                          Resourcefulness
                        </SelectItem>
                        <SelectItem value="Networking">Networking</SelectItem>
                        <SelectItem value="Emotional Intelligence">
                          Emotional Intelligence
                        </SelectItem>
                        <SelectItem value="Public Speaking">
                          Public Speaking
                        </SelectItem>
                        <SelectItem value="Team Building">
                          Team Building
                        </SelectItem>
                        <SelectItem value="Volunteer Management">
                          Volunteer Management
                        </SelectItem>
                        <SelectItem value="Risk Management">
                          Risk Management
                        </SelectItem>
                        <SelectItem value="Budget Management">
                          Budget Management
                        </SelectItem>
                        <SelectItem value="Project Management">
                          Project Management
                        </SelectItem>
                        <SelectItem value="Event Promotion">
                          Event Promotion
                        </SelectItem>
                        <SelectItem value="Conflict Management">
                          Conflict Management
                        </SelectItem>
                        <SelectItem value="Community Engagement">
                          Community Engagement
                        </SelectItem>
                        <SelectItem value="Logistics">Logistics</SelectItem>
                        <SelectItem value="Interpersonal Skills">
                          Interpersonal Skills
                        </SelectItem>
                        <SelectItem value="Volunteer Coordination">
                          Volunteer Coordination
                        </SelectItem>
                        <SelectItem value="Stress Management">
                          Stress Management
                        </SelectItem>
                        <SelectItem value="Critical Thinking">
                          Critical Thinking
                        </SelectItem>
                        <SelectItem value="Data Analysis">
                          Data Analysis
                        </SelectItem>
                        <SelectItem value="Marketing Skills">
                          Marketing Skills
                        </SelectItem>
                        <SelectItem value="Fundraising">Fundraising</SelectItem>
                        <SelectItem value="Innovation">Innovation</SelectItem>
                        <SelectItem value="Team Leadership">
                          Team Leadership
                        </SelectItem>
                        <SelectItem value="Social Media Management">
                          Social Media Management
                        </SelectItem>
                        <SelectItem value="Event Coordination">
                          Event Coordination
                        </SelectItem>
                        <SelectItem value="Decision-Making Under Pressure">
                          Decision-Making Under Pressure
                        </SelectItem>
                        <SelectItem value="Conflict Resolution">
                          Conflict Resolution
                        </SelectItem>
                        <SelectItem value="Volunteer Training">
                          Volunteer Training
                        </SelectItem>
                        <SelectItem value="Problem Identification">
                          Problem Identification
                        </SelectItem>
                        <SelectItem value="First Aid">First Aid</SelectItem>
                        <SelectItem value="Team Management">
                          Team Management
                        </SelectItem>
                        <SelectItem value="Crowd Management">
                          Crowd Management
                        </SelectItem>
                        <SelectItem value="Sponsorship Management">
                          Sponsorship Management
                        </SelectItem>
                        <SelectItem value="Vendor Management">
                          Vendor Management
                        </SelectItem>
                        <SelectItem value="Financial Management">
                          Financial Management
                        </SelectItem>
                        <SelectItem value="Safety Procedures">
                          Safety Procedures
                        </SelectItem>
                        <SelectItem value="Volunteer Recognition">
                          Volunteer Recognition
                        </SelectItem>
                        <SelectItem value="Problem Resolution">
                          Problem Resolution
                        </SelectItem>
                        <SelectItem value="Documentation Skills">
                          Documentation Skills
                        </SelectItem>
                        <SelectItem value="Empowerment">Empowerment</SelectItem>
                        <SelectItem value="Team Motivation">
                          Team Motivation
                        </SelectItem>
                        <SelectItem value="Event Evaluation">
                          Event Evaluation
                        </SelectItem>
                        <SelectItem value="Volunteer Engagement">
                          Volunteer Engagement
                        </SelectItem>
                        <SelectItem value="Digital Literacy">
                          Digital Literacy
                        </SelectItem>
                        <SelectItem value="Project Coordination">
                          Project Coordination
                        </SelectItem>
                        <SelectItem value="Event Logistics">
                          Event Logistics
                        </SelectItem>
                        <SelectItem value="Volunteer Recruitment">
                          Volunteer Recruitment
                        </SelectItem>
                        <SelectItem value="Community Outreach">
                          Community Outreach
                        </SelectItem>
                        <SelectItem value="Resource Management">
                          Resource Management
                        </SelectItem>
                        <SelectItem value="Marketing Strategy">
                          Marketing Strategy
                        </SelectItem>
                        <SelectItem value="Community Building">
                          Community Building
                        </SelectItem>
                        <SelectItem value="Event Security">
                          Event Security
                        </SelectItem>
                        <SelectItem value="Leadership Development">
                          Leadership Development
                        </SelectItem>
                        <SelectItem value="Volunteer Retention">
                          Volunteer Retention
                        </SelectItem>
                        <SelectItem value="Problem Prevention">
                          Problem Prevention
                        </SelectItem>
                        <SelectItem value="Crowdfunding">
                          Crowdfunding
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="exprience"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="select-field">
                      <SelectValue placeholder="Expriences" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Fresher">Fresher</SelectItem>
                        <SelectItem value="6 - 12 Months">
                          6 - 12 Months
                        </SelectItem>
                        <SelectItem value="2 - 5 years">2 - 5 years</SelectItem>
                        <SelectItem value="10+ Years ">10+ Years</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? "Submitting..." : `${type} Event`}
        </Button>
      </form>
    </Form>
  );
};

export default EventForm;
