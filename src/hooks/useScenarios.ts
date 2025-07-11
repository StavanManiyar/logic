import { useState, useEffect, useMemo } from 'react';
import { scenarioService, Scenario } from '../services/scenarioService';
import { useProgress } from '../contexts/ProgressContext';

export const useScenarios = () => {
  const { userProgress } = useProgress();
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadScenarios = async () => {
      try {
        setLoading(true);
        const allScenarios = scenarioService.getAllScenarios();
        
        // Mark completed scenarios based on user progress
        const completedIds = userProgress.map(p => p.scenario_id);
        const scenariosWithProgress = allScenarios.map(scenario => ({
          ...scenario,
          completed: completedIds.includes(scenario.id)
        }));
        
        setScenarios(scenariosWithProgress);
      } catch (error) {
        console.error('Error loading scenarios:', error);
      } finally {
        setLoading(false);
      }
    };

    loadScenarios();
  }, [userProgress]);

  const completedScenarios = useMemo(() => 
    scenarios.filter(s => s.completed), [scenarios]
  );

  const availableScenarios = useMemo(() => {
    const completedIds = completedScenarios.map(s => s.id);
    return scenarioService.getUnlockedScenarios(completedIds)
      .filter(s => !s.completed);
  }, [scenarios, completedScenarios]);

  const recommendedScenarios = useMemo(() => {
    const completedIds = completedScenarios.map(s => s.id);
    return scenarioService.getRecommendedScenarios(completedIds);
  }, [completedScenarios]);

  const progressInsights = useMemo(() => {
    const completedIds = completedScenarios.map(s => s.id);
    return scenarioService.getProgressInsights(completedIds);
  }, [completedScenarios]);

  return {
    scenarios,
    completedScenarios,
    availableScenarios,
    recommendedScenarios,
    progressInsights,
    loading,
    getScenarioById: scenarioService.getScenarioById.bind(scenarioService),
    searchScenarios: scenarioService.searchScenarios.bind(scenarioService),
    getCategories: scenarioService.getCategories.bind(scenarioService)
  };
};
