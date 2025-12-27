import { SlashCommandConfigurator } from "./base.js";
import { SlashCommandId } from "../../templates/index.js";

const FILE_PATHS: Record<SlashCommandId, string> = {
  proposal: ".codefuserules/workflows/openspec-proposal.md",
  apply: ".codefuserules/workflows/openspec-apply.md",
  archive: ".codefuserules/workflows/openspec-archive.md"
};

export class CodeFuseSlashCommandConfigurator extends SlashCommandConfigurator {
  readonly toolId = "codefuse";
  readonly isAvailable = true;

  protected getRelativePath(id: SlashCommandId): string {
    return FILE_PATHS[id];
  }

  protected getFrontmatter(_id: SlashCommandId): string | undefined {
    return undefined;
  }
}
