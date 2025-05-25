export type ProjectFrontmatter = {
  /**
   * The title of the project
   */
  title: string;

  /**
   * The description of the project
   */
  description: string;

  /**
   * The tags of the project
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The GitHub URL of the project
   */
  githubUrl?: string;

  /**
   * The live URL of the project
   */
  liveUrl?: string;

  /**
   * Whether the project should be featured on the homepage
   */
  featured?: boolean;

  /**
   * The date the project was created or started in W3C format
   * (this will determine the sort order of the projects)
   */
  timestamp: string;

  /**
   * The URL of the project on the website
   * (eg. https://zaggonaut.dev/projects/my-project)
   */
  filename: string;
  
  /**
   * The current status of the project
   * (eg. "Active", "Completed", "Paused", "Dropped")
   */
  status?: "Active" | "Completed" | "Paused" | "Dropped";
};

export type BlogFrontmatter = {
  /**
   * The title of the article
   */
  title: string;

  /**
   * THe summary description of the article
   */
  description: string;

  /**
   * The tags of the article
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  draft?: boolean;

  /**
   * Whether the article should be featured on the homepage
   */
  featured: boolean;


  timestamp: string;
  
  filename: string;
};

export type CustomDate = {
  day : number;
  month : Month;
  year : number
}

export type Month =
  "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December"


export type WorkFrontmatter = {
  /**
   * Job Title
   */
  title: string;

  /**
   * Description of job
   */
  description: string;

  /**
   * The tags of the article
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * Whether the job should be featured on the homepage
   */
  featured: boolean;

  liveUrl?: string;

  githubUrl?: string;

  timestamp: string;

  filename: string;
};