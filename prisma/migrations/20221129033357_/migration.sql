/*
  Warnings:

  - Added the required column `apptTime` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointment` ADD COLUMN `apptTime` VARCHAR(191) NOT NULL;
