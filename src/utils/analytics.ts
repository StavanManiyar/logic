// Analytics utility for tracking user interactions
export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  userId?: string;
}

class Analytics {
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  track(event: string, properties?: Record<string, any>, userId?: string) {
    if (!this.isEnabled) {
      console.log('Analytics (dev):', { event, properties, userId });
      return;
    }

    // In production, integrate with your analytics service
    // Example: Google Analytics, Mixpanel, Amplitude, etc.
    try {
      // gtag('event', event, properties);
      console.log('Analytics:', { event, properties, userId });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }

  identify(userId: string, traits?: Record<string, any>) {
    if (!this.isEnabled) {
      console.log('Analytics identify (dev):', { userId, traits });
      return;
    }

    try {
      // analytics.identify(userId, traits);
      console.log('Analytics identify:', { userId, traits });
    } catch (error) {
      console.error('Analytics identify error:', error);
    }
  }

  page(name: string, properties?: Record<string, any>) {
    if (!this.isEnabled) {
      console.log('Analytics page (dev):', { name, properties });
      return;
    }

    try {
      // analytics.page(name, properties);
      console.log('Analytics page:', { name, properties });
    } catch (error) {
      console.error('Analytics page error:', error);
    }
  }
}

export const analytics = new Analytics();

// Common event tracking functions
export const trackScenarioStart = (scenarioId: string, scenarioTitle: string) => {
  analytics.track('Scenario Started', {
    scenario_id: scenarioId,
    scenario_title: scenarioTitle,
  });
};

export const trackScenarioComplete = (scenarioId: string, scenarioTitle: string, timeSpent: number) => {
  analytics.track('Scenario Completed', {
    scenario_id: scenarioId,
    scenario_title: scenarioTitle,
    time_spent_seconds: timeSpent,
  });
};

export const trackCodeGeneration = (language: string, inputLength: number) => {
  analytics.track('Code Generated', {
    language,
    input_length: inputLength,
  });
};

export const trackUserSignup = (method: string) => {
  analytics.track('User Signed Up', {
    method,
  });
};

export const trackUserLogin = (method: string) => {
  analytics.track('User Logged In', {
    method,
  });
};