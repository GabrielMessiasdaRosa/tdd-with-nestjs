import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type TweetProps = {
  id: string;
  content: string;
  screen_name: string;
};

@Entity()
export class Tweet {
  constructor(private props: TweetProps) {
    Object.assign(this, props);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column()
  screen_name: string;
}
