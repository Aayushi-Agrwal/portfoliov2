export interface IImage {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      };
    };
  }
  
  export interface IProject {
    id: number;
    attributes: {
      name: string;
      description: string;
      picture: IImage;
      url: string;
    };
  }
  
  export interface IGetProjectsResponse {
    data: IProject[];
  }
  
  export interface IProjectDataDetails {
    title: string;
    active: boolean;
    description: string;
    picture: string;
    url: string;
    technologies: string[];
  }