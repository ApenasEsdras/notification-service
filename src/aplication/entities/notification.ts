export interface NotificationProps {
  content: string;
  category: string;
}

export class Notification {
  private content: string;
  private category: string;

  constructor() {
    this.content = '';
  }

  public set content(content: string) {
    if (content.length < 5) {
      throw new Error();
    }

    this.content = content;
  }

  public get content(): string {
    return this.props.content;
  }
}

const notification = new Notification();
notification.content = 'sadgfe';
