import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Architecture and Squad Governance Rules', () => {
  it('should have a valid tasks.json conforming to task schema requirements', () => {
    const tasksPath = path.resolve(process.cwd(), 'tasks.json');
    expect(fs.existsSync(tasksPath)).toBe(true);

    const tasksContent = JSON.parse(fs.readFileSync(tasksPath, 'utf8'));
    expect(Array.isArray(tasksContent)).toBe(true);
    expect(tasksContent.length).toBeGreaterThan(0);

    for (const task of tasksContent) {
      expect(task.id).toMatch(/^TASK-\d+$/);
      expect(task.title).toBeTruthy();
      expect(task.assignedSquad).toBeDefined();
      expect(task.assignedSquad.orchestrator).toBe('project-manager');
      expect(task.artifacts).toBeDefined();
      expect(Array.isArray(task.artifacts.acceptanceCriteria)).toBe(true);
    }
  });

  it('should enforce single WIP=1 in tasks.json', () => {
    const tasksPath = path.resolve(process.cwd(), 'tasks.json');
    const tasks = JSON.parse(fs.readFileSync(tasksPath, 'utf8'));
    const activeTasks = tasks.filter((t: { status: string }) => t.status === 'in_progress' || t.status === 'in_review');
    expect(activeTasks.length).toBeLessThanOrEqual(1);
  });

  it('should have dependency-cruiser and opengrep configuration files', () => {
    const depCruisePath = path.resolve(process.cwd(), '.dependency-cruiser.js');
    const openGrepPath = path.resolve(process.cwd(), '.agents/opengrep/strapi-react-rules.yaml');
    expect(fs.existsSync(depCruisePath)).toBe(true);
    expect(fs.existsSync(openGrepPath)).toBe(true);
  });
});
