import Realm from 'realm';
import { GroupsSchema } from './schemas/GroupsSchema';
import { StickerSchema } from './schemas/StickerSchema';
import { TeamSchema } from './schemas/TeamSchema';

export const getRealm = async () => await Realm.open({
  path: "world-cup-2022",
  schema: [StickerSchema, GroupsSchema, TeamSchema],
  schemaVersion: 2
})