-- CreateTable
CREATE TABLE "Costume" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "weakness" TEXT[],
    "skills" TEXT[],
    "price" INTEGER NOT NULL,
    "stock" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Costume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendee" (
    "id" SERIAL NOT NULL,
    "dni" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT,
    "money" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "fears" TEXT[],
    "isNervous" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attendee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Budget" (
    "id" SERIAL NOT NULL,
    "attendeeId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartyConfiguration" (
    "id" SERIAL NOT NULL,
    "partyId" INTEGER NOT NULL,
    "music" TEXT,
    "decorations" TEXT,
    "theme" TEXT,

    CONSTRAINT "PartyConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CostumeTransaction" (
    "id" SERIAL NOT NULL,
    "attendeeId" INTEGER NOT NULL,
    "costumeId" INTEGER NOT NULL,
    "amountPaid" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CostumeTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TerrorHouseAccess" (
    "id" SERIAL NOT NULL,
    "attendeeId" INTEGER NOT NULL,
    "allowed" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TerrorHouseAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Costume_name_key" ON "Costume"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Attendee_dni_key" ON "Attendee"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Party_name_key" ON "Party"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Budget_attendeeId_key" ON "Budget"("attendeeId");

-- CreateIndex
CREATE UNIQUE INDEX "TerrorHouseAccess_attendeeId_key" ON "TerrorHouseAccess"("attendeeId");

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "Attendee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyConfiguration" ADD CONSTRAINT "PartyConfiguration_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CostumeTransaction" ADD CONSTRAINT "CostumeTransaction_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "Attendee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CostumeTransaction" ADD CONSTRAINT "CostumeTransaction_costumeId_fkey" FOREIGN KEY ("costumeId") REFERENCES "Costume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TerrorHouseAccess" ADD CONSTRAINT "TerrorHouseAccess_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "Attendee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
