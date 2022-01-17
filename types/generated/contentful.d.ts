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

export type CONTENT_TYPE = "hobby" | "photo";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
