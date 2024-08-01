import config from '../config/config'
import { Client, Databases, Query } from 'appwrite'

export class PostService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwrite_url)
      .setProject(config.appwrite_project_id);
    this.databases = new Databases(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(config.appwrite_database_id, config.appwrite_collection_id, slug, {
        title,
        content,
        featuredImage,
        status,
        userId
      })
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(config.appwrite_database_id, config.appwrite_collection_id, slug, {
        title,
        content,
        featuredImage,
        status
      })
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(config.appwrite_database_id, config.appwrite_collection_id, slug);
    } catch (error) {
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(config.appwrite_database_id, config.appwrite_collection_id, slug);
    } catch (error) {
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(config.appwrite_database_id, config.appwrite_collection_id, queries);
    } catch (error) {
      throw error
    }
  }
}

const postService = new PostService();

export default postService;
