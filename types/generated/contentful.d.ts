// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IHobbyFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Description */
  description?: string | undefined;

  /** Thumbnail */
  thumbnailDesktop?: Asset | undefined;

  /** Photos */
  photos?: Asset[] | undefined;
}

/** Hobbies */

export interface IHobby extends Entry<IHobbyFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "hobby";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IJobExperienceFields {
  /** Company */
  company: string;

  /** Address */
  address: string;

  /** Website */
  website?: string | undefined;

  /** Role */
  role: string;

  /** Start Date */
  startDate: string;

  /** End Date */
  endDate?: string | undefined;

  /** Tenureship */
  tenureship: string;

  /** Description */
  description: Document;

  /** Photos */
  photos?: Asset[] | undefined;

  /** Order */
  order: number;
}

/** Job Experience */

export interface IJobExperience extends Entry<IJobExperienceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "jobExperience";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPhotoFields {
  /** Media */
  media?: Asset | undefined;

  /** Description */
  description?: string | undefined;
}

/** Photo */

export interface IPhoto extends Entry<IPhotoFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "photo";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISkillFields {
  /** Name */
  name: string;

  /** Rating */
  rating: number;
}

/** CV Skill */

export interface ISkill extends Entry<ISkillFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "skill";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISocialLinkFields {
  /** Label */
  label: string;

  /** Url */
  url: string;

  /** Icon */
  icon:
    | "facebook"
    | "twitter"
    | "linkedin"
    | "github"
    | "instagram"
    | "website";

  /** Order */
  order: number;

  /** Color */
  color?: string | undefined;
}

/** Social links */

export interface ISocialLink extends Entry<ISocialLinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "socialLink";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IStartPageFields {
  /** Title */
  title?: string | undefined;

  /** LinkedIn Page */
  linkedInPage?: string | undefined;

  /** Facebook Page */
  facebookPage?: string | undefined;

  /** Twitter Page */
  twitterPage?: string | undefined;
}

/** Start Page */

export interface IStartPage extends Entry<IStartPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "startPage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "hobby"
  | "jobExperience"
  | "photo"
  | "skill"
  | "socialLink"
  | "startPage";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
