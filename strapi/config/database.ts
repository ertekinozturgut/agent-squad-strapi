import path from 'path';
import os from 'os';

export default ({ env }: { env: (key: string, defaultValue?: unknown) => string }) => {
  const defaultDbPath = path.join(os.homedir(), '.strapi', 'ertekin_cms.db');
  const dbFile = env('DATABASE_FILENAME', defaultDbPath);
  const filename = path.isAbsolute(dbFile)
    ? dbFile
    : path.join(__dirname, '..', '..', dbFile);

  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename,
      },
      useNullAsDefault: true,
    },
  };
};
