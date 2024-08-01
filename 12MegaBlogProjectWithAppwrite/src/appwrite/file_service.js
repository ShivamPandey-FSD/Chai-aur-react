import config from '../config/config'
import { Client, ID, Storage } from 'appwrite'

export class FileService {
  client = new Client();
  buckets;

  constructor() {
    this.client
      .setEndpoint(config.appwrite_url)
      .setProject(config.appwrite_project_id);
    this.buckets = new Storage(this.client);
  }

  async fileUpload(file) {
    try {
      return await this.buckets.createFile(config.appwrite_bucket_id, ID.unique(), file);
    } catch (error) {
      throw error;
    }
  }

  getFilePreview(fileId) {
    return this.buckets.getFilePreview(config.appwrite_bucket_id, fileId);
  }

  getDownloadFile(fileId) {
    return this.buckets.getFileDownload(config.appwrite_bucket_id, fileId);
  }

  async fileDelete(fileId) {
    try {
      return this.buckets.deleteFile(config.appwrite_bucket_id, fileId);
    } catch (error) {
      throw error;
    }
  }
}

const fileService = new FileService();

export default fileService;
