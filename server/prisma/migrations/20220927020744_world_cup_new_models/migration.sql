-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "stickers" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    CONSTRAINT "Team_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Stickers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "codigo" INTEGER NOT NULL,
    "teamId" TEXT NOT NULL,
    CONSTRAINT "Stickers_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
